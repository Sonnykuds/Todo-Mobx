import { Button, Card, Table } from "antd";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "./context";
import { AiFillDelete, AiOutlineUndo } from "react-icons/ai";

const DoneTasks = () => {
  const {
    doneTasksArray,
    deleteSelectedFinishedTasks,
    setSelectedDoneRows,
    selectedDoneRows,
    undoFinishedTasks,
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
    selectedRowKeys: selectedDoneRows,
    onChange: (selectedRowKeys) => {
      setSelectedDoneRows(selectedRowKeys);
    },
  };
  const hasSelected = selectedDoneRows.length !== 0;

  const undoSelectedFinishedTask = (index) => {
    undoFinishedTasks(index);
  };

  const deleteSelectedFinished = (index) => {
    deleteSelectedFinishedTasks(index);
  };

  return (
    <>
      {doneTasksArray.length > 0 && (
        <Card className=" w-3/4">
          <div className=" text-3xl text-center font-bold">Finished Tasks</div>
          <>
            {hasSelected && (
              <>
                <Button
                  onClick={() => {
                    deleteSelectedFinished(selectedDoneRows);
                  }}
                >
                  <AiFillDelete />
                </Button>
                <Button
                  onClick={() => {
                    undoSelectedFinishedTask(selectedDoneRows);
                  }}
                >
                  <AiOutlineUndo />
                </Button>
              </>
            )}
          </>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={[...doneTasksArray]}
          />
        </Card>
      )}
    </>
  );
};

export default observer(DoneTasks);
