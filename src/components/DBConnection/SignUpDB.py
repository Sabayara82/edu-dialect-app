from dotenv import load_dotenv
import os
import psycopg2
from urllib.parse import urlparse

class SignUpDB:
    _instance = None # store the singleton instance of the class

    def __new__(cls):
        if not cls._instance:
            cls._instance = super(SignUpDB, cls).__new__(cls)  # super calls the default object class of python 

            load_dotenv()
            DB_CONNECTION_STRING = os.getenv('DB_CONNECTION_STRING')
            url = urlparse(DB_CONNECTION_STRING)

            try:
                cls._instance.connection = psycopg2.connect(
                    user=url.username,
                    password=url.password,
                    host=url.hostname,
                    port=url.port,
                    database=url.path[1:]
                )

                cls._instance.cursor = cls._instance.connection.cursor()

                cls._instance.cursor.execute("SELECT version();")

                version = cls._instance.cursor.fetchone()
                print("PostgreSQL Server Version:", version[0])

            except Exception as e:
                print("Error:", e)

        return cls._instance

    def close_connection(self):
        # Close the cursor and connection
        self.cursor.close()
        self.connection.close()

# Example usage:
# db_instance = SignUpDB()
# # Perform database operations using db_instance.connection and db_instance.cursor
# db_instance.close_connection()
