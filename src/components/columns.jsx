import { format } from "date-fns";
import { ColumnsFilter } from "./columnsFilter";
export const Columns = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",

    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "E-mail",
    Footer: "E-mail",
    accessor: "email",
  },
  {
    Header: "DOB",
    Footer: "DOB",
    accessor: "data_of_birth",

    Cell: ({ value }) => {
      console.log("value", value);
      return format(new Date(value), "MM/dd/yyyy");
    },
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone Number",
    Footer: "Phone Number",
    accessor: "phone",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "E-mail",
        Footer: "E-mail",
        accessor: "email",
      },
      {
        Header: "DOB",
        Footer: "DOB",
        accessor: "date_of_birth",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone Number",
        Footer: "Phone Number",
        accessor: "phone",
      },
    ],
  },
];
