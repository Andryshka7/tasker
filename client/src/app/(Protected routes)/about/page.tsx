import { Advantages, Information } from './components'

const Page = () => (
	<div className='mx-10 flex flex-col items-center'>
		<h1 className='mt-16 text-5xl font-bold'>About tasker</h1>
		<p className='line mt-8 max-w-[1050px] text-center text-xl font-medium leading-10'>
			Tasker is a robust task management system designed to streamline collaboration and
			enhance productivity within teams. Whether you're working on a small project or managing
			complex workflows across multiple teams, Tasker empowers you to stay organized,
			prioritize tasks, and track progress with ease.
		</p>

		<Advantages />

		<p className='line mt-8 max-w-[980px] text-center text-xl font-medium leading-10'>
			Unlock your team's full potential with Tasker's innovative features. By leveraging
			Tasker's capabilities, you can streamline your workflow, minimize delays, and boost
			project success exponentially. Try Tasker today to experience how it can supercharge
			your team's productivity and deliver remarkable results.
		</p>

		<Information />
	</div>
)

export default Page
