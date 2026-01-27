
import Card from './components/card.jsx'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      pay: "$72/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag: "Part Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "10 weeks ago",
      post: "Full Stack Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      pay: "$90/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hour",
      location: "Gurugram, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Solutions Architect",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "3 weeks ago",
      post: "AI Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$100/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "Machine Learning Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      pay: "$110/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "8 weeks ago",
      post: "Research Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Remote"
    },
    {
      brandLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      datePosted: "9 days ago",
      post: "Frontend Developer (React)",
      tag: "Part Time",
      tag2: "Junior Level",
      pay: "$60/hour",
      location: "Chennai, India"
    }
  ];


  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2}  Location={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App
