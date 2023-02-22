import { Workbook } from 'exceljs'

const wb = new Workbook()
const sheet = wb.addWorksheet('账单', {})


sheet.columns = [{
  header: '任务',
  key: 'name',
  width: 30,
}, {
  header: '目标',
  key: 'target',
  width: 50,
}, {
  header: '进度',
  key: 'progress',
  width: 100
}]

interface Task {
  name: string
  target: string
  progress: number
}

const tasks: Task[] = [
  { name: '健身', target: '八块腹肌', progress: -50 },
  { name: '看书', target: '看遍天下奇书', progress: 30 }
]

sheet.addRows(tasks)

tasks.forEach(task => {

})

wb.xlsx.writeFile('./dist/task.xlsx')
