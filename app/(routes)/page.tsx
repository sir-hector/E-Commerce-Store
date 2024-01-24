import { getBillboard } from '@/actions/get-billboard'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard('fac2e03d-6e33-4867-9537-e7cacdd0e537')
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
      </Container>
    </div>
  )
}

export default HomePage
