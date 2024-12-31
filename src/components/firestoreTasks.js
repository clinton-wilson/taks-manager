import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";

// Save a task
export const saveTask = async (userId, task) => {
  try {
    await addDoc(collection(db, "tasks"), { userId, ...task });
  } catch (error) {
    console.error("Error saving task:", error);
  }
};

// Fetch tasks for a specific user
export const fetchTasks = async (userId) => {
  const tasks = [];
  try {
    const q = query(collection(db, "tasks"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
  return tasks;
};

// Delete a task
export const deleteTask = async (taskId) => {
  try {
    await deleteDoc(doc(db, "tasks", taskId));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};