# sql-to-csv

Converts SQL query table output to a CSV

Takes tables of this form as produced by database query output and turns them into CSV data:

```
 column   | value
----------+-------
 A        | 0
 BB       | 1
 CCC      | 2
 DDDD     | 3
 EEEEE    | 4
 FFFFFF   | 5
 GGGGGGG  | 6
 HHHHHHHH | 7
```

Usage:

Add a file path to read:

```
sql-to-csv my-file.txt >> data.csv
```

Pipe a stream:

```
cat my-file.txt | sql-to-csv >> data.csv
```
