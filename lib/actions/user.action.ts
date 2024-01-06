"use server";

import User from "@/database/user.modal";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.modal";

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({
      clerkId: userId,
    });
    return user;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}
export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}
export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;
    console.log(clerkId);

    const updateUser = await User.findByIdAndUpdate(clerkId, updateData, {
      new: true,
    });
    revalidatePath(path);
    return updateUser;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}
export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("user not found");
    }
    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    );
    // delete all questions of user
    await Question.deleteMany({ author: user._id });
    // TODO : delete answers also

    const deletedUser = await User.findByIdAndDelete({ clerkId });
    return deletedUser;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}
