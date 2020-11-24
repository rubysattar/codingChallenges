# Query to return top 10 < tabeName> by < someColumnName>

## My understanding:

One way to do this (not preferable) is to nest queries. We have a table out of any order and we want to look at one column of it. That column corrsponds to another table via foreign key. The query must rank that column's values in descending order AND must return only the top 10 from the other table that this data corresponds to.

## My first go:

SELECT < someColumnName> ranked_by_total

FROM (
    
    SELECT < someColumnName> 

    RANK() OVER(
        
        ORDER BY < someColumnName> DESC
        
        ) 
        ranked_by_total 
        
        FROM < tableName>
        
        )
        
        ranked_orders 
        
        WHERE ranked_by_total <= 10;

### Explanation of My First Go:
Originally, I thought creating a new column (ranked_by_total) that stored values returned from the Rank() function would work... and it did, but this solution is expensive on space. Nesting queries, like nesting loops isn't ideal for time and space complexity.

## My Final Go:
SELECT < someColumnFromTableA>
	
    FROM < tableA>
		
        JOIN < table_B>
		
        ON < correspondingForeignKeyColumnInTable_B> = < what theColumnCorrespondstoInTable_A>
	
    ORDER BY < someColumnName> DESC
	
    LIMIT 10;

## Explanation of my final go:

This is one query that handles it all with a 'join' and a 'limit'. I didn't need to make any new tables, columns, or use any functions.

### Practice resource: sqlbolt.com