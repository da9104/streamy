import { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        if (this.props.auth) {
        return (
         <div className='z-40 -mt-24 pt-2 px-5 text-sm font-medium'>
          <div className='flex flex-row gap-5 justify-center items-center'>
            <p> Wellcome, {`${this.props.auth.name}`} </p>
            <img className='rounded-full size-10 self-center' src={`${this.props.auth.avatar}`} alt={`${this.props.auth.email}`}/>
            <p> {`${this.props.auth.email}`} </p>
            <p> Your credit: {`${this.props.auth.credits}`} </p>
           </div>

        </div>
         )
           } else {
             return(
                <div className='-mt-24 pt-2 px-5 flex justify-center w-full max-w-lg'>
                   <div className=" border-gray-100 shadow rounded-md p-4 lg:w-full">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                
                </div>
            )
         }
    }
}


function mapStateToProps(state) {
	return { auth: state.auth }
}

export default connect(mapStateToProps)(Dashboard)