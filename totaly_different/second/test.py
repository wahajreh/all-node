from sqlalchemy import create_engine
import pandas as pd
import pyodbc
server='WAHAJ-IT\SQLEXPRESS'
db='[smfoods]'
driver='ODBC Driver for SQL Server'
cString='Driver={ODBC Driver 17 for SQL Server};Server=54.206.78.215;Database=partyApp;UID=rails;PWD=WvopaSwyqzr3oppC;'
db_con='Driver={ODBC Driver 17 for SQL Server};Server=WAHAJ-IT\SQLEXPRESS;Database=[smfoods];Trusted_Connection=yes;'

# engine=create_engine(cString)
# con=engine.connect()

cnxn = pyodbc.connect(cString)
cursor = cnxn.cursor()

cursor.execute("SELECT top 10 * FROM userregisteration")

# for row in cursor:
#     print(row)

# print (tables)

# for row in cursor.columns(table='WORK_ORDER'):
#     print row.column_name
#     for field in row:
#         print field


try:
    df=pd.read_sql_query('select top 10 * from [dbo].[userregisteration]',cnxn)
    df
except:
    print('')