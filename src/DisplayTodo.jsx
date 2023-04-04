import { Button, Table } from "antd";
import { useContext } from "react";
import { Context } from "./context";
import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";
import { observer } from "mobx-react";
const Display = () => {
  const {
    todo,
    deleteSelected,
    setSelectedRows,
    selectedRows,
    selectedDoneTask,
  } = useContext(Context);

  const columns = [
    {
      title: "Tasks",
      dataIndex: "value",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  ];
  const rowSelection = {
    type: "checkbox",
    selectedRowKeys: selectedRows,
    onChange: (selectedRowKeys) => {
      setSelectedRows(selectedRowKeys);
    },
  };
  const deleteSelect = (index) => {
    deleteSelected(index);
  };
  const doneTasks = (index) => {
    selectedDoneTask(index);
  };
  const hasSelected = selectedRows.length !== 0;
  return (
    <>
      {hasSelected && (
        <>
          <Button
            onClick={() => {
              deleteSelect(selectedRows);
            }}
          >
            <AiFillDelete />
          </Button>
          <Button
            onClick={() => {
              doneTasks(selectedRows);
            }}
          >
            <AiFillCheckCircle />
          </Button>
        </>
      )}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={[...todo]}
      />
    </>
  );
};

export default observer(Display);
