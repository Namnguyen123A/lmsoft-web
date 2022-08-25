import * as React from 'react';
import { Data_Out_Work } from './Out-Work';
import OurWorkItem from './OutWorkItem';
export interface IOutWorkProps {
}

export default function OutWork (props: IOutWorkProps) {
  return (
    <div>
      {
                Data_Out_Work?.map((item, index) => {
                    return <OurWorkItem key={index} item={item} />
                })
            }
    </div>
  );
}
