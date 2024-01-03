// function App() {
// const title = 'Blog Post'
// const body = 'This is my blog post'
// const comments = [
//     { id: 1, text: 'Comment one' },
//     { id: 2, text: 'Comment two' },
//     { id: 3, text: 'Comment three' }
// ]
// const loading = false

// if (loading) return <h1>Loading...</h1>


// return (
//     <div className="container">
//         <h1>My App</h1>
//     </div>
// <div className='container'>
//     <h1>{title.toUpperCase()}</h1>
//     <p>{body}</p>
//     <div className="comment">
//         <h2>Comments({comments.length})</h2>
//         <ul>
//             {comments.map((comment, index) => (
//                 <li key={index}>{comment.text}</li>
//             ))}

//         </ul>
//     </div>
// </div>
//     )
// }

//     const [feedback, setFeedback] = useState(FeedbackData)

//     const addFeedback = (newFeedback) => {
//         newFeedback.id = uuidv4()
//         setFeedback([newFeedback, ...feedback])

//     }

//     const deleteFeedback = (id) => {
//         if (window.confirm('Are you sure you want to delete ?')) {
//             setFeedback(feedback.filter((item) => item.id !== id))
//         }
//     }

// export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';



function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        ></Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App
