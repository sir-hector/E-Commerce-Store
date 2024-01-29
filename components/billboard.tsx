import { Billboard as BillboardType } from '@/types'

interface BillboardProps {
  data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 roundex-xl">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl realtive aspect-square md:aspect-[2.4/1] overflow-hidden"
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="font-bold text-3ml sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard
