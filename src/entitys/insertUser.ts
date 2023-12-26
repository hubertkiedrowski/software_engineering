import { DataSource } from "typeorm";
import { user } from "./User";
import { leaderboard } from "./leaderboard";

export const appDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
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
): Promise<user | null> {
  try {
    const newUser = new user();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.username = username;
    newUser.mail = mail;
    newUser.secredPassword = secredPassword;

    const userRepository = appDataSource.getRepository(user);
    await userRepository.save(newUser);

    return newUser;
  } catch (error) {
    console.error("Error creating new user:", error);
    return null;
  }
}
