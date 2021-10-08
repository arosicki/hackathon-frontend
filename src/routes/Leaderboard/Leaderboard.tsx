import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import styled from "styled-components";
import { getLeaderboard, LeaderboardData } from "./getLeaderboard.api";
import { useEffect, useState } from "react";

const BareLeaderboard = ({ className }: LeaderboardProps) => {
  const [rows, setRows] = useState<LeaderboardData[] | []>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getLeaderboard();
        setRows(data);
      } catch (e) {
        setError(true);
      }
    })();
  }, []);
  return (
    <div className={className}>
      {!error ? (
        <>
          <h1>Top 10 global miners</h1>
          <TableContainer>
            <Table draggable={false}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell align="center">Username</TableCell>
                  <TableCell align="center">Treecoins</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {i}
                    </TableCell>
                    <TableCell align="center">{user.username}</TableCell>
                    <TableCell align="center">{user.nOfCoins}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <h1 className="error">Error, can't connect to the server</h1>
      )}
    </div>
  );
};

const Leaderboard = styled(BareLeaderboard)`
  .error {
    transform: translate(-50%, -50%);
    position: absolute;
    color: red;
    font-weight: bold;
    left: 50%;
    top: 50%;
  }
  h1 {
    margin: 0 auto;
    text-align: center;
    padding-top: 80px;
    color: #eee;
  }
  .MuiTableContainer-root {
    padding: 30px 0 0;
    margin: 0 auto;
    width: 70%;
    .MuiTableRow-root {
      th,
      td {
        color: rgba(224, 224, 224, 1) !important;
      }
      th {
        font-weight: bold;
      }
      border: 1px solid rgba(224, 224, 224, 1);
    }
  }
  background-color: #333;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 960px) {
    h1 {
      margin: 0 auto;
      padding-top: 120px;
    }
    height: calc(100vh - 30px);

    padding-top: 30px;
    width: 100% !important;
    .MuiTableContainer-root {
      width: 100%;
    }
  }
`;

interface LeaderboardProps {
  className?: string;
}
export default Leaderboard;
