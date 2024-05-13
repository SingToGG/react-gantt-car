import React from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";

// const localeDateStringCache: any = {};
// const toLocaleDateStringFactory =
//   (locale: string) =>
//   (date: Date, dateTimeOptions: Intl.DateTimeFormatOptions) => {
//     const key = date.toString();
//     let lds = localeDateStringCache[key];
//     if (!lds) {
//       lds = date.toLocaleDateString(locale, dateTimeOptions);
//       localeDateStringCache[key] = lds;
//     }
//     return lds;
//   };
// const dateTimeOptions: Intl.DateTimeFormatOptions = {
//   weekday: "short",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

export const TaskListTableDefault: React.FC<{
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
}> = ({
  rowHeight,
  rowWidth,
  tasks,
  fontFamily,
  fontSize,
  // locale,
}) => {
  // const toLocaleDateString = useMemo(
  //   () => toLocaleDateStringFactory(locale),
  //   [locale]
  // );

  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.map((t, i) => {
        // let expanderSymbol = "";
        // if (t.hideChildren === false) {
        //   expanderSymbol = "▼";
        // } else if (t.hideChildren === true) {
        //   expanderSymbol = "▶";
        // }

        return (
          <div
          className={styles.taskListTableRow}
          style={{ height: rowHeight }}
          key={`${t.id}row`}
        >
             <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
              title={t.name}
            >
              <div style={{ display: 'flex', flexDirection: 'row'}}>
                <div style={{paddingRight: '10px', paddingLeft: '10px', alignSelf: 'center'}}>0{ i + 1 }</div>
                <div style={{ paddingRight: '10px'}}>
                 {t?.image ? <img src={t.image}  height={40} /> : null}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
                  <span style={{ fontWeight: 'bold', fontSize: '16px'}}> {t.name}</span>
                  <span style={{ fontSize: '12px'}}>WDN-2024-05-10</span>
                </div>

              </div>
            </div>
         </div>
        );
      })}
    </div>
  );
};
