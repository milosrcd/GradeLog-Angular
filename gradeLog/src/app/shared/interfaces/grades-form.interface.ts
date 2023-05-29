import { StudentDetails } from "src/app/features/models/student-details.model"

export interface GradesForm {
  student?: StudentDetails,
  lecture: string,
  points: number,
  textarea: string,
  date: Date
}

export interface Grade {
  student: string,
  lecture: string,
  grade: number,
  textarea: string,
  date: Date
}
