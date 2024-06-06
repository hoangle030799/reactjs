import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '$500' },
            { id: 'abcJob2', title: 'Testers', salary: '$400' },
            { id: 'abcJob3', title: 'PM', salary: '$1000' }
        ]
    }
    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) =>{
        let currenJob = this.state.arrJobs
        currenJob = currenJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJob
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob = {this.addNewJob}
                />
                <ChildComponent
                    name={'Hoàng'}
                    age={'24'}
                    arrJobs={this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />
            </>
        )
    }
}


export default MyComponent;