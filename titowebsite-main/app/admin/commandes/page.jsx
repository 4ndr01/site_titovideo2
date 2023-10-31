import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {getSession} from 'next-auth/react'
import Paper from '@mui/material/Paper';
import SectionTitle from '@/components/Common/SectionTitle';

const getMessages = async () => {
    try {
      const res = await fetch(`http://localhost:3000/tarifs/api/commande`, {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch messages");
      }

      return res.json();
    } catch (error) {
      console.log("Error loading messages: ",error);
    }
  };

export default async function BasicTable (){
    const {commande}  = await getMessages();

  return (
    <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">

    <SectionTitle
      title="Bienvenue sur la page admin"
      paragraph="Vous avez accès en temps réel aux demandes des clients"
      center
      width="635px"
    />
      <div className="container px-4 mx-auto">
      <TableContainer  className="bg-white shadow-md rounded my-6">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-gray-50 dark:bg-gray-800">
          <TableRow>




          </TableRow>
        </TableHead>
        <TableBody>

          <TableCell align="right">Format</TableCell>
        {commande.map((t) => (
            <TableRow
              key={t._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">

              </TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell  >{t.email}</TableCell>
              <TableCell align="right">Info</TableCell>
              <TableCell>{t.commentary}</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell>{t.date}</TableCell>
                <TableCell align="right">Format</TableCell>
              <TableCell align="right">{t.selectedChoice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </section>
  );
}
