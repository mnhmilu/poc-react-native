import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('test.db');


export const openDatabase = () => {
  console.log("dsfsdfdsafdsf----------------------->")
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
};

const db = openDatabase();


export const insertData = (name) => {

  console.log("inserting data--------------------->");


  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists items (id integer primary key not null, done int, value text);"
    );
    tx.executeSql("insert into items (done, value) values (0, ?)", 'test data');
    tx.executeSql("select * from items", [], (_, { rows }) =>
      console.log(JSON.stringify(rows))
    );
  });




};






// export const insertData = (name) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'INSERT INTO your_table_name (name) VALUES (?);',
//       [name],
//       (_, { rowsAffected, insertId }) => {
//         if (rowsAffected > 0) {
//           console.log('Data inserted successfully. Insert ID:', insertId);
//         } else {
//           console.log('Failed to insert data');
//         }
//       }
//     );
//   });
// };

// export const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         'SELECT * FROM your_table_name;',
//         [],
//         (_, { rows }) => {
//           resolve(rows._array);
//         },
//         (_, error) => {
//           reject(error);
//         }
//       );
//     });
//   });
// };
