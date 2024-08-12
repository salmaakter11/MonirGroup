import React from 'react'
import ItInfo from './ItInfo'
import ItMenagment from './ItMenagment'
import ItTeam from './ItTeam'

const ItSheba = () => {
    return (
        <>
            <ItInfo />
            <ItMenagment />
            <ItTeam />
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
            
            <div className="modal fade" id="teamMemberIdcard" tabIndex={-1} role="dialog" aria-labelledby="teamMemberIdcardLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="teamMemberIdcardLabel">ID Card</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src="assets/img/monir-group/id card.jpg" alt="ID card" className="img-fluid mb-3" />
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

export default ItSheba
