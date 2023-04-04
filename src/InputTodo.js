import { Button, Card, DatePicker, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { observer } from "mobx-react";
import { useContext } from "react";
import { Context } from "./context";
import Display from "./DisplayTodo";
const InputTodo = () => {
    const {add} = useContext(Context)
    const [form] = Form.useForm()
    const handleAddTasks = (values) => {
        add({date: values.date.format("MMMM DD YYYY"),  value: values.name})
        form.resetFields()
    }
    return (  
      <Card className=" w-2/3">
        <div className=" text-3xl text-center font-bold">Todo Lists</div>
        <Form onFinish={handleAddTasks} form={form}>
            <div className=" flex justify-center items-center ">
            <FormItem name="name" className=" w-full">
                <Input placeholder="Task"/>
            </FormItem>
            <FormItem name="date">
                <DatePicker/>
            </FormItem>
            <FormItem>
                <Button htmlType="submit" className=" bg-blue-500">ADD</Button>
            </FormItem>
            </div>
        </Form>
        <Display/>
      </Card>
    );
}
 
export default observer(InputTodo);