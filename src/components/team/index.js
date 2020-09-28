import React from 'react';
import { Team as members } from 'src/constants';

import './team.css';

const Team = () => {
    return (
        <div class="grid">
            {Object.values(members).map((v,i) => {
                return (
                    <div key={i.toString()} class="grid-item" style={{gridArea: v.gridId}}>
                        <div class="team-member">
                            <p class="title team-member-name">{v.name}</p>
                            <p class="subtitle team-member-role">{`${v.role}`}</p>
                            <a href={`mailto:${v.mail}`}><i class="far fa-envelope mail-icon" /></a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Team;