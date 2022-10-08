import './app-info.css';

const AppInfo = ({increased, employees}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудныков в компании "Вилва"</h1>
      <h2>Общее чысло сотрудников: {employees} </h2>
      <h2>Премию получат: {increased} </h2>
    </div>
  )
}

export default AppInfo;