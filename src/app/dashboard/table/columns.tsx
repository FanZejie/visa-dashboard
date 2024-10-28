"use client";

import { Button } from "@/components/ui/button";

import { useUser } from "@clerk/nextjs";
import { Record } from "@/type/Record";
import { ColumnsType } from "antd/es/table";
// 计算日期差的函数
const calculateDaysBetween = (start: string, end: string) => {
  if (!start || !end) return "未计算"; // 如果没有日期，返回提示信息
  const startDate = new Date(start);
  const endDate = new Date(end);

  // 计算相差的天数
  const diffTime = endDate.getTime() - startDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 转换为天数
  return diffDays >= 0 ? `${diffDays} 天` : "未下签";
};




export const getColumns = (handleEdit: (row: Record) => void, handleDelete: (id: string) => void, handleDetail: (row: Record) => void): ColumnsType<Record, any>[] => {

  return [
    {
      accessorKey: "submitTime",
      header: "递签日期",
      sortUndefined: "last",
    },
    {
      accessorKey: "getVisaTime",
      header: "下签日期",
      sortDescFirst: false,
      sortUndefined: "last",
  
      cell(props) {
        return props.getValue() === "" ? "未下签" : props.getValue();
      },
    },
    {
      header: "签证处理时间", // 新增一列展示相隔天数
      cell: (props) => {
        const submitTime = props.row.original.submitTime;
        const getVisaTime = props.row.original.getVisaTime;
        return calculateDaysBetween(submitTime, getVisaTime);
      },
    },
    {
      accessorKey: "visaOfficer",
      header: "签证官",
    },
    {
      accessorKey: "educationLevel",
      header: "本硕博",
    },
    {
      accessorKey: "major",
      header: "专业",
      cell:(props) => {
    
        if(props.row.original.major.length >= 10){
          const str = props.row.original.major.substring(0,15)
  
          return str+'...'
        }else{
          return props.row.original.major
        }
        
      }
    },
    {
      accessorKey: "submitPlace",
      header: "递签地点",
    },
    {
      accessorKey: "ifIncludedCouple",
      header: "是否含陪读",
      cell: ({ getValue }) => {
        const value = getValue();
        if (value === "true") {
          return "含陪读";
        } else if (value === "false") {
          return "单独";
        }else if(value === ""){
          return "--"
        }else{
          return value
        }
      },
    },
    {
      id: "details",
      header: "详情",
      cell: ({ row }) => {
       
        const { user } = useUser();
        const isAdmin = user?.organizationMemberships[0]?.role === "org:admin";
        
        return (
          <>
            <Button
              variant="default"
              onClick={() => handleDetail(row.original)}
              className="h-6 w-16 mr-2">
              查看详情
            </Button>

            {isAdmin && (
              <>
              <Button
                variant="default"
                onClick={() => handleEdit(row.original)}
                className="h-6 w-10 mr-2">
                编辑
              </Button>
              </>
            )}
            {isAdmin && (
              <Button
                variant="destructive"
                onClick={() => handleDelete(row.original._id!)}
                className="h-6 w-10">
                删除
              </Button>
            )}
          </>
        );
      },
    },
  ];
}
  
