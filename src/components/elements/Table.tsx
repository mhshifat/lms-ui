import React, { Fragment } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";
import { useAuth } from "../../hooks";
import { TableActions, TableImg, Wrapper } from "../../styles/table";
import { Props } from "../../types/table";

const Table: React.FC<Props> = ({
  tableData,
  headingColumns,
  breakOn = "medium",
  actions,
  onView,
  onEdit,
  onDelete,
}) => {
  const { userPayload } = useAuth();

  const data = tableData.map((row, index) => {
    const rowData: { key: string; val: string }[] = [];
    let i = 0;

    for (const key in row) {
      rowData.push({
        key: headingColumns[i],
        val: row[key],
      });
      i++;
    }

    return (
      <tr key={index}>
        {rowData.map((data, index) => (
          <td data-heading={data.key} key={index}>
            {data.val?.startsWith("https://") ? (
              <TableImg src={data.val} />
            ) : (
              data.val
            )}
          </td>
        ))}
        {actions && (
          <td data-heading="Actions">
            <TableActions>
              <VscPreview
                onClick={() => {
                  onView?.(rowData[0].val);
                }}
              />
              {userPayload && +userPayload.role === 0 && (
                <Fragment>
                  <BiEdit
                    onClick={() => {
                      onEdit?.(rowData[0].val);
                    }}
                  />
                  <BiTrash
                    onClick={() => {
                      onDelete?.(rowData[0].val);
                    }}
                  />
                </Fragment>
              )}
            </TableActions>
          </td>
        )}
      </tr>
    );
  });

  return (
    <Wrapper>
      <thead>
        <tr>
          {headingColumns.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
          {actions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Wrapper>
  );
};

export default Table;
