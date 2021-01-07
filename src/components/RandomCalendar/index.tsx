import ReactCalendarHeatmap from "react-calendar-heatmap";
import { subYears } from "date-fns";
import generateHeatmapValues from "./functions";
import { HeatmapValue } from "./type";

import { Container } from "./styles";

const RandomCalendar = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className='wrapper'>
        <ReactCalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0;

            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }

            return `scale-${clampedCount}`;
          }}
          showWeekdayLabels
        />
      </div>

      <span>Random Calendar (do not represent actual data)</span>
    </Container>
  );
};

export default RandomCalendar;
