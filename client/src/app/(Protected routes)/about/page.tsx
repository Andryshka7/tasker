import { Advantages, Information } from './components'

const Page = () => {
	return (
		<div className='mx-10 flex flex-col items-center'>
			<h1 className='mt-20 text-5xl font-bold'>About tasker</h1>
			<p className='line mt-10 max-w-[650px] text-center text-2xl font-medium leading-10'>
				Welcome to tasker, multifunctional task management system built for optimizing
				client’s business workflow
			</p>

			<Advantages />

			<p className='line mt-10 max-w-[700px] text-center text-2xl font-medium leading-10'>
				Make teamwork easier and get more done with Tasker. Try it out today and see how it
				can boost your team's productivity!
			</p>

			<Information />
		</div>
	)
}
export default Page
