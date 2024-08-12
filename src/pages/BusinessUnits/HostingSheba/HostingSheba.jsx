import React from 'react'
import HostingInfo from './HostingInfo'
import HostingManagment from './HostingManagment'
import HostingTeam from './HostingTeam'

const HostingSheba = () => {
    return (
        <>
            <HostingInfo />
            <HostingManagment/>
            <HostingTeam/>
            <div className="modal fade" id="teamMemberModal" tabIndex={-1} role="dialog" aria-labelledby="teamMemberModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="teamMemberModalLabel">Visiting Card</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src="assets/img/monir-group/visiting-card.png" alt="team-image" className="img-fluid mb-3" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" name="submit" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HostingSheba
