import React , { useState, useEffect, Fragment } from "react";
import { PieChart, Pie, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import styled from "styled-components";
import Typography from "./Typography";

const PieChartContainer = styled.div`
  width: 298px;
  height: 298px;
  position: relative;
  margin-top: 73px; 
  margin-left: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  border-radius: 298px;
  //background: #E9808C;
  //box-shadow: 0px 16px 18px 0px rgba(233, 128, 140, 0.25);
  //border: 1px solid gray;
`;

const HalfPieChartContainer = styled.div`
  width: 298px;
  height: 298px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  border-radius: 298px;

  margin-top: 44px;
  margin-left: 30px;
  //box-shadow: 0px 16px 18px 0px rgba(216, 88, 136, 0.24);
`;

const PlotChartContainer = styled.div`
  margin-top: 73px;

`;

const LabelBox = styled.div`
  position: absolute;
  left: 357px;
  top: -26px;
  //border: 1px solid gray
`;

const HalfLabelBox = styled.div`
  position: absolute;
  left: 357px;
  top: -9px;
  //border: 1px solid gray
`;

const LabelColor = styled.span<{ color: string }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 15px;
`;

const ChartTitleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const dataMajor = [
  { name: "경영학과",value: 2, avgGpa: 4.4, fill: "#787071", boxShadow: " 0px 16px 18px 0px rgba(120, 112, 113, 0.25)" },
  { name: "정경대", value: 50, avgGpa: 3.5, fill: "#CC668C", boxShadow: "0px 16px 18px 0px rgba(204, 102, 140, 0.25)" },
  { name: "의과대학", value: 10, avgGpa: 3.0, fill: "#99D88E", boxShadow: "0px 16px 18px 0px rgba(147, 216, 136, 0.25)" },
  { name: "정보대학", value: 14, avgGpa: 4.2, fill: "#FFD35F", boxShadow: "0px 16px 18px 0px rgba(255, 211, 95, 0.25)" },
  { name: "미디어학부", value: 24, avgGpa: 4.0, fill: "#EEA6BC", boxShadow: "0px 16px 18px 0px rgba(238, 166, 188, 0.25)" },
  { name: "스마트보안", value: 2, avgGpa: 3.8, fill: "#F1A351", boxShadow: "0px 16px 18px 0px rgba(241, 163, 81, 0.25)" },
  { name: "문과대", value: 20, avgGpa: 4.32, fill: "#FFF", boxShadow: "0px 16px 18px 0px rgba(168, 168, 168, 0.25)" },
  { name: "이과대학", value: 11, avgGpa: 3.78, fill: "#7287AB", boxShadow: "0px 16px 18px 0px rgba(114, 135, 171, 0.25)" },
  { name: "사범대학", value: 3, avgGpa: 4.0, fill: "#4C8ECC", boxShadow: "0px 16px 18px 0px rgba(233, 77, 94, 0.25)" },
  { name: "디자인조형학부", value: 6, avgGpa: 4.0, fill: "#A667AE", boxShadow: "0px 16px 18px 0px rgba(166, 103, 174, 0.25)" },
  { name: "보건과학대학", value: 8, avgGpa: 4.09, fill: "#E9808C", boxShadow: "0px 16px 18px 0px rgba(233, 128, 140, 0.25)" },
  { name: "심리학부", value: 10, avgGpa: 3.54, fill: "#89D7E1", boxShadow: "0px 16px 18px 0px rgba(137, 215, 225, 0.25)" },
  { name: "생명과학대학", value: 13, avgGpa: 3.82, fill: "#78BE94", boxShadow: "0px 16px 18px 0px rgba(120, 190, 148, 0.25)" },
  { name: "공과대학", value: 4, avgGpa: 3.88, fill: "#FF8461", boxShadow: "0px 16px 18px 0px rgba(255, 132, 97, 0.25)" },
  { name: "간호대학", value: 4, avgGpa: 3.67, fill: "#F5BDBD", boxShadow: "0px 16px 18px 0px rgba(245, 189, 189, 0.25)" },
  { name: "국제대학", value: 6, avgGpa: 3.9, fill: "#58A2C6", boxShadow: "0px 16px 18px 0px rgba(88, 162, 198, 0.25)" },
  { name: "자유전공학부", value: 14, avgGpa: 3.7, fill: "#7BBEEE", boxShadow: "0px 16px 18px 0px rgba(123, 190, 238, 0.25)" },
  { name: "스마트모빌리티학부", value: 8, avgGpa: 4.12, fill: "#3F87F3", boxShadow: "0px 16px 18px 0px rgba(63, 135, 243, 0.25)" },
  { name: "기타", value: 1, avgGpa: 2.8, fill: "#DFDFDF", boxShadow: "0px 18px 16px 0px rgba(223, 223, 223, 0.25)" } 
].sort((a,b) => b.value - a.value);

const dataGrade = [
  { name: "23학번",value: 50, fill: "#D85888",},
  { name: "22학번",value: 24, fill: "#E57C90",},
  { name: "21학번",value: 14, fill: "#FFAFBD", },
  { name: "20학번 이상",value: 4, fill: "var(--SECONDARY, #FDF2F2)",},
].sort((a,b) => b.value - a.value);

const totalMajor = dataMajor.reduce((sum, item) => sum + item.value, 0);
const totalGrade = dataGrade.reduce((sum, item) => sum + item.value, 0);

const PieChartComponent = () => {
  return (
    <PieChartContainer>
      <PieChart width={350} height={350}>
        <Pie
          data={dataMajor}
          cx={169}
          cy={169}
          outerRadius={149}
          innerRadius={134.1}
          cornerRadius={99}
          startAngle={0}
          endAngle={360}
          dataKey="value"
          fill="#8884d8"
        />
      </PieChart>
      <ChartTitleBox>
      <Typography size="normalText" style={{ color: "var(--Main-Black, #141414)", fontWeight: "700", }}>
          지원자 별 단과대 분포
        </Typography>
      </ChartTitleBox>
      <svg xmlns="http://www.w3.org/2000/svg" width="616" height="616" viewBox="0 0 616 616" fill="none"
        style={{ position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <g filter="url(#filter0_d_3559_10276)">
          <circle cx="308" cy="304" r="108" fill="white" fill-opacity="0.2" shape-rendering="crispEdges"/>
        </g>
        <defs>
          <filter id="filter0_d_3559_10276" x="0" y="0" width="616" height="616" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="100"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0784314 0 0 0 0 0.0784314 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3559_10276"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3559_10276" result="shape"/>
          </filter>
        </defs>
      </svg>
     
      <LabelBox>
        <div>
          {dataMajor.map((item, index) => (
            index < 5 ? (
              <Fragment key={item.name}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", width: "100%" }}>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <LabelColor color={item.fill} style={{ marginRight: "15px" }} />
                    <Typography size="normalText" style={{ color: "var(--Main-Black, #141414)", fontWeight: "700" }}>
                      {item.name}
                    </Typography>
                  </div>
                  <Typography size="normalText" style={{ color: "var(--Main-Black, #141414)", fontWeight: "700" }}>
                    {((item.value / totalMajor) * 100).toFixed(0)}%
                  </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "3px" }}>
                  <Typography size="normalText" style={{ color: "#A8A8A8", fontWeight: "400", marginTop: "6px" }}>
                    {item.value}명
                  </Typography>
                </div>
                {index < 5 - 1 && 
                  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="2" viewBox="0 0 250 2" fill="none"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                    <path d="M1 1H249" stroke="#DFDFDF" stroke-linecap="round"/>
                  </svg>
                } 
              </Fragment>
              ) : null
            ))}
        </div>
      </LabelBox>
    </PieChartContainer>  
  );
};

const HalfPieChartComponent = () => {

  return(
    <HalfPieChartContainer>
      <PieChart width={350} height={350}>
          <Pie
            data={dataGrade}
            cx={169}
            cy={169}
            outerRadius={149}
            innerRadius={134.1}
            cornerRadius={99}
            startAngle={180}
            endAngle={0}
            dataKey="value"
            fill="#8884d8"
      />
      </PieChart>
      <ChartTitleBox>
      <Typography size="normalText" 
        style={{color: "var(--Main-Black, #141414)", fontWeight: "700", marginTop: "-39px"}}>
        지원자 별 학번 분포
      </Typography>
      </ChartTitleBox>
      <svg xmlns="http://www.w3.org/2000/svg" width="616" height="508" viewBox="0 0 616 508" fill="none"
        style={{ position: "absolute", top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
      <g filter="url(#filter0_d_3646_36677)">
        <path d="M416 304C416 289.817 413.206 275.773 407.779 262.67C402.351 249.567 394.396 237.661 384.368 227.632C374.339 217.604 362.433 209.649 349.33 204.221C336.227 198.794 322.183 196 308 196C293.817 196 279.773 198.794 266.67 204.221C253.567 209.649 241.661 217.604 231.632 227.632C221.604 237.661 213.649 249.567 208.221 262.67C202.794 275.773 200 289.817 200 304L308 304H416Z" fill="white" fill-opacity="0.2" shape-rendering="crispEdges"/>
      </g>
      <defs>
        <filter id="filter0_d_3646_36677" x="0" y="0" width="616" height="508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="100"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0784314 0 0 0 0 0.0784314 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3646_36677"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3646_36677" result="shape"/>
        </filter>
      </defs>
    </svg>
      <HalfLabelBox>
        <div>
          {dataGrade.map((item, index) => (
            index < 4 ? (
              <Fragment key={item.name}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", width: "100%" }}>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <LabelColor color={item.fill} style={{ marginRight: "15px" }} />
                    <Typography size="normalText" style={{ color: "var(--Main-Black, #141414)", fontWeight: "700" }}>
                      {item.name}
                    </Typography>
                  </div>
                  <Typography size="normalText" style={{ color: "var(--Main-Black, #141414)", fontWeight: "700", lineHeight: "125%" }}>
                    {((item.value / totalGrade) * 100).toFixed(0)}%
                  </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "3px" }}>
                  <Typography size="normalText" style={{ color: "#A8A8A8", fontWeight: "400", }}>
                    {item.value}명
                  </Typography>
                </div>
                {index < 4 - 1 && 
                  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="2" viewBox="0 0 250 2" fill="none"
                    style={{ marginTop: "12px", marginBottom: "12px" }}
                  >
                    <path d="M1 1H249" stroke="#DFDFDF" stroke-linecap="round"/>
                  </svg>
                } 
              </Fragment>
              ) : null
            ))}
        </div>
      </HalfLabelBox>
    </HalfPieChartContainer>
  )
};

interface HoverData {
  Hoverdata: {
    name: string;
    value: number;
    avgGpa: number;
  };
  fill: string;
}

interface CustomDatatipProps {
  payload?: HoverData[] | undefined;
  activeData?: typeof dataMajor[0] | null;
}

const TooltipStyle = styled.div`
  width: 120px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 8px;
  gap: 10px;
  background: rgba(255, 255, 255, 0.80);
`;

const CustomTooltip: React.FC<CustomDatatipProps> = ({ activeData }) => {
  if (activeData) {
    const { name, value, avgGpa } = activeData;
    return (
      <TooltipStyle>
        <Typography size="smallText" style={{ color: "var(--Main-Black, #141414)", fontWeight: "700", lineHeight: "157.143%" }}>
          {name}
        </Typography>
        <div  style={{ display: "flex", alignItems: "baseline" }}>
          <Typography size="smallText" style={{ color: "var(--Main-Black, #A8A8A8)", lineHeight: "22px" }}>
            학점 
          </Typography>
          <Typography size="smallText" style={{ color: "var(--Main-Black, #141414)", fontWeight: "700", lineHeight: "157.143%", marginLeft: "5px" }}>
            {avgGpa}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "baseline"}}>
          <Typography size="smallText" style={{ color: "var(--Main-Black, #A8A8A8)", lineHeight: "22px" }}>
            지원자 
          </Typography>
          <Typography size="smallText" style={{ color: "var(--Main-Black, #141414)", fontWeight: "700", lineHeight: "157.143%", marginLeft: "5px" }}>
            {value}
          </Typography>
        </div>
      </TooltipStyle>
    );
  }
  return null;
};

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={9} 
      fill={payload.fill} 
      stroke={payload.fill} 
      strokeWidth={1}
    />
  );
};

const PlotChartComponent = () => {

  const maxValue = Math.max(...dataMajor.map(item => item.value));
  const intervalY = maxValue <= 50 ? 10 : maxValue / 5;
  const [hoveredData, setHoveredData] = useState<typeof dataMajor[0] | null>(null);

  return(
    <PlotChartContainer>
      <ScatterChart
        width={470}
        height={540}
      >
        <CartesianGrid horizontal={true} vertical={true} />
        <XAxis
          type="number" 
          dataKey="x" 
          name="지원자 평균 학점" 
          unit="" 
          domain={[0, 4.5]} 
          interval="preserveStartEnd" 
          ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]}
          />
        <YAxis
          type="number" 
          dataKey="y" 
          name="지원자" 
          unit="" 
          interval={0}
          domain={[0, maxValue]}
          ticks={Array.from({ length: intervalY + 1 }, (_, i) => i * (maxValue / intervalY))}
        />
        <Tooltip content={<CustomTooltip activeData={hoveredData} />} />
        {dataMajor.map((data, index) => (
          <Scatter
            data={[{ x: data.avgGpa, y: data.value }]}
            //shape={(props) => <CustomDot {...props} fill={data.fill} />}
            fill={data.fill}
            key={index}
            onMouseOver={() => setHoveredData(data)}
            onMouseOut={() => setHoveredData(null)}
          />
        ))}
      </ScatterChart>
    </PlotChartContainer>
  )
};


export {PieChartComponent, HalfPieChartComponent, PlotChartComponent};