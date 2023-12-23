import { DataSource } from "typeorm";
import { user } from "./User";
import { leaderboard } from "./leaderboard";

export const appDataSource = new DataSource({
  type: "sqlite",
  database: "database",
  logging: true,
  synchronize: true,
  entities: [user, leaderboard],
});

// type userType = {
//   username: string;
//   firstName: string;
//   lastName: string;
//   mail: string;
//   progress: string;
// };

export async function newUser(
  firstName: string,
  lastName: string,
  username: string,
  mail: string,
  secredPassword: string
): Promise<user> {
  const newUser = new user();
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.username = username;
  newUser.mail = mail;
  newUser.secredPassword = secredPassword;

  const foo = appDataSource.getRepository(user);
  console.log(foo);
  await foo.save(newUser);

  return newUser;
}
function userAlterProgress(username: string) {}
