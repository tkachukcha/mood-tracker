import React from "react";
import { Formik, Form, Field } from "formik";

const DataForm = ({ onSubmit }) => (
  <div>
    <Formik
      initialValues={{
        date: "",
        mood: "",
        energy: "",
        workHours: "",
      }}
      onSubmit={onSubmit}
    >
      <Form className="m-10">
        <label className="ml-3 mr-2" htmlFor="date">Date</label>
        <Field className="mr-2 px-2 py-1 w-24 border-solid border-2 border-green-900 rounded-md" id="date" name="date" placeholder="21/12" />

        <label className="ml-3 mr-2" htmlFor="mood">Mood</label>
        <Field className="mr-2 px-2 py-1 w-24 border-solid border-2 border-green-900 rounded-md" id="mood" name="mood" placeholder="10" />

        <label className="ml-3 mr-2" htmlFor="energy">Energy</label>
        <Field className="mr-2 px-2 py-1 w-24 border-solid border-2 border-green-900 rounded-md" id="energy" name="energy" placeholder="10" />

        <label className="ml-3 mr-2" htmlFor="workHours">Work Hours</label>
        <Field className="mr-2 px-2 py-1 w-24 border-solid border-2 border-green-900 rounded-md" id="workHours" name="workHours" placeholder="10" />

        <button className="bg-green-400 px-2 py-1 rounded-md border-solid border-2 border-green-900 cursor-pointer" type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default DataForm;
