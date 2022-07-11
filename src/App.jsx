import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  const data = [{ id: 1, name: "学习课程" },
  { id: 2, name: "完成作业" },
  { id: 3, name: "阅读学习资料" },
  { id: 4, name: "看一看胜古朝阳" },
  ]

  const [tasks, setTasks] = useState(data);
  const [newTask, setNewTask] = useState("");
  function handleClick(event) {
    // var NewID = 0;
    // for (var index in tasks) {
    //   if (NewID < tasks[index].id) NewID = tasks[index].id;
    // }
    // NewID = NewID +1;
    // var NewID = Math.max.apply(0,tasks.map(item=>item.id)) + 1;
    // var NewID = tasks.map(item => item.id).reduce((acc, item) => Math.max(acc, item)) + 1;
    var NewID = 1 + tasks.map(item => item.id).reduce((acc, item) => Math.max(acc, item),0) ?? 0;
    //console.log("NewID = " + NewID )


    setTasks([...tasks, { id: NewID, name: newTask }]);
    //提交后清除输入框内容
    setNewTask("");[]

  }
  function handleDeleteTask(TaskID) {
    setTasks(tasks.filter(e => e.id != TaskID));
  }

  // useEffect(() => {
  //   setNewTask("");
  // }, [tasks])

  return (<>
    <div>
      <p>我的待办列表</p>
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.id}>
              <span onClick={() => { handleDeleteTask(item.id) }}>[x]</span>
              {item.name}</li>)
        }
        )}
      </ul>
    </div>
    <div>
      <input type="text" value={newTask} onChange={(event) => { setNewTask(event.target.value); }} />
      <button type="button" onClick={handleClick} >添加任务</button>
    </div>
  </>
  )
}

export default App
