import { getMemberTeam, getSingleTeam, deleteTeam } from './teamData';
import { getSingleMember, deleteMember } from './memberData';

const viewMemberDetails = (memberFirebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(memberFirebaseKey)
    .then((memberObject) => {
      getSingleTeam(memberObject.team_id)
        .then((teamObject) => {
          resolve({ teamObject, ...memberObject });
        });
    }).catch((error) => reject(error));
});

const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getMemberTeam(teamFirebaseKey)])
    .then(([teamObject, teamMemberArray]) => {
      resolve({ ...teamObject, members: teamMemberArray });
    }).catch((error) => reject(error));
});

const deleteTeamMember = (teamId) => new Promise((resolve, reject) => {
  getMemberTeam(teamId).then((membersArray) => {
    console.warn(membersArray, 'Delete from Team?');
    const deleteMemberPromises = membersArray.map((members) => deleteMember(members.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteTeam(teamId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewMemberDetails, viewTeamDetails, deleteTeamMember };
