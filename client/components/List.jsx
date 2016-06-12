var List = (props) => (
  <div>
    {props.tasks.map((task, ind)=>{
      return <LineItem key={ind} taskTitle={task.taskTitle}/>
    })}
  </div>
);