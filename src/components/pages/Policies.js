import React from "react";
import "../../App.css";
import "..//Policies.css";
import { Link } from "react-router-dom";

function Policies() {
  return (
    <div className="container">
      <div className="us-image">
        <div className="header">
          Policies
          <br />
          {/* <img className='ucbmun-image' src={require('./images/ucbmun.png')} alt='UCBMUN Logo' /> */}
        </div>
        <br />
        <br />
        <br />
      </div>
      <br />

      <div className="policies">
        <div className="policy">
          <br />
          Awards
        </div>
        <br />
        <div className="policy-info">
          <p className='content'>
            BearMUN awards recognize exceptional diplomacy, creativity, and
            engagement in Model UN. Each committee grants Best Delegate,
            Outstanding Delegate, Honorable Mention, and Verbal Commendation
            awards based on size. Staffers assess delegates impartially,
            considering factors like collaboration, creativity, and
            contribution. Position papers are unnecessary. Delegation awards are
            given based on the cumulative performance of delegates, with
            distinctions between small and large delegations. Awards are
            permanent unless conference policy violations occur, leading to
            revocation.
          </p>
        </div>
      </div>
      <div className="policies">
        <div className="policy">
          <br />
          Harassment
        </div>
        <br />
        <div className="policy-info">
        <p className='content'>
        BearMUN maintains a safe environment by strictly prohibiting
all forms of harassment and discrimination, including but not

limited to race, gender, sexual orientation, socioeconomic
status, religion, and disability. We are committed to fostering a
respectful and inclusive environment for all delegates. This
policy applies both in-character and out-of-character.
Delegates can report concerns to their chair, crisis director,
USG, or secretariat. Violators will face proportional reprimand
or punishment determined by the BearMUN Secretariat. We
thank all delegates for upholding our values and maintaining a
commitment to professionalism and respect in order to make
our conference an enriching experience for all.
          </p>
        </div>
      </div>
      <div className="policies">
        <div className="policy">
          <br />
          Plagiarism
        </div>
        <br />
        <div className="policy-info">
        <p className='content'>
            BearMUN strictly prohibits the use of pre-written clauses in
            committee sessions. Delegates must draft all substantive material
            during committee hours and may not delete clauses without author
            permission. Props are allowed but not considered for awards. To
            report suspected violations, contact your committee chair. BearMUN
            reserves the right to investigate claims and will penalize offenders
            based on the severity of the violation. <br />
          </p>
        </div>
      </div>
      <div className="policies">
        <div className="policy">
          <br />
          Clause Writing
        </div>
        <br />
        <div className="policy-info">
        <p className='content'>
            BearMUN strictly prohibits the use of pre-written clauses in
            committee sessions. Delegates must draft all substantive material
            during committee hours and may not delete clauses without author
            permission. Props are allowed but not considered for awards. To
            report suspected violations, contact your committee chair. BearMUN
            reserves the right to investigate claims and will penalize offenders
            based on the severity of the violation. <br />
          </p>
        </div>
      </div>

      <div className="policies">
        <div className="policy">
          <br />
          Technology
        </div>
        <br />
        <div className="policy-info">
        <p className='content'>
            BearMUN acknowledges technology's importance for research and
            learning but prohibits its improper use in committee to maintain
            fairness. Delegates must refrain from using technology for
            additional research and are encouraged to bring written notes. Cell
            phone usage is discouraged. Technology access varies by committee
            type:
          </p>
          <br />
          <li className='content'>
            GA Committees: Laptops are allowed for working papers and
            resolutions during unmoderated caucuses.
          </li>
          <li className='content'>
            Crisis Committees and Specialized Bodies: No technology use; all
            research and documents must be physical.
          </li>
          <br />
          <p className='content'>
          Violations will result in penalties determined by the severity of the
          offense. Contact your committee chair with any concerns.
          </p>

          
        </div>
      </div>

      <div className="policies">
        <div className="policy">
          <br />
          Land Acknowledgment
        </div>
        <br />
        <div className="policy-info">
        <p className='content'>
        We acknowledge that the land on which UC Berkeley, and our
conference, stand is the territory of the Ohlone people, the
successors of the sovereign Verona Band of Alameda County. This
land was and continues to be of great importance to the Ohlone
people, who have stewarded it throughout generations. We
recognize that Berkeley occupies their ancestral and unceded
territory, and we pay our respects to the Ohlone community and
their elders both past and present. We affirm their ongoing
connection to this land, which remains vital to their identity,
culture, and community. To learn more about the Ohlone people
please visit <Link> https://cejce.berkeley.edu/ohloneland </Link> or
<Link> https://www.muwekma.org/ </Link><br />
          </p>
          <br />
          <br />
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Policies;
