import React from "react";
import './demo.scss'
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (job) => {
        console.log('handleOnClickDelete:', job)
        this.props.deleteAJob(job)
    }
    render() {
        let { name, age, arrJobs } = this.props
        let { showJobs } = this.state;
        return (
            <>
                <div>
                    {name}-{age}
                </div>
                {showJobs === false ?
                    <div>
                        <button style={{color: "red"}} onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() =>this.handleOnClickDelete(item)}>X</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let {arrJobs} = props;
//     return (
//         <>
//             <div className="job-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;