"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TravelOrderData } from "@/app/page";

interface TravelOrderPreviewProps {
  data: TravelOrderData;
}

export function TravelOrderPreview({ data }: TravelOrderPreviewProps) {
  const handlePrint = () => {
    window.print();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long", 
      year: "numeric"
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end print:hidden">
        <Button onClick={handlePrint} className="bg-green-600 hover:bg-green-700 text-white">
          Cetak Surat
        </Button>
      </div>

      {/* Page 1 */}
      <Card className="print:shadow-none print:border-none">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="font-bold text-lg mb-2">
              INSTITUT PEMERINTAHAN DALAM NEGERI
            </div>
            <div className="font-bold text-lg mb-4">
              KEMENTERIAN DALAM NEGERI
            </div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="text-left">
                <div>Lembar Ke :</div>
                <div>Kode No. :</div>
                <div>Nomor : {data.letterNumber}</div>
              </div>
            </div>
            
            <div className="font-bold text-lg mb-6">
              Surat Perjalanan Dinas (SPD)
            </div>
          </div>

          {/* Main Table */}
          <table className="w-full border-collapse border border-black text-sm">
            <tbody>
              <tr>
                <td className="border border-black p-2 w-8 text-center font-bold">1.</td>
                <td className="border border-black p-2 w-1/3">Pejabat Pembuat Komitmen</td>
                <td className="border border-black p-2">{data.commitmentOfficer}</td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">2.</td>
                <td className="border border-black p-2">Nama Pegawai yang diperintahkan</td>
                <td className="border border-black p-2">
                  {data.employeeName}<br/>
                  NIP. {data.employeeNip}
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">3.</td>
                <td className="border border-black p-2">
                  a. Pangkat dan Golongan<br/>
                  b. Jabatan/Instansi<br/>
                  c. Tingkat Biaya Perjalanan Dinas
                </td>
                <td className="border border-black p-2">
                  a. {data.rank}<br/>
                  b. {data.position}<br/>
                  c. {data.workUnit}
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">4</td>
                <td className="border border-black p-2">Maksud Perjalanan Dinas</td>
                <td className="border border-black p-2">{data.travelPurpose}</td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">5</td>
                <td className="border border-black p-2">Alat angkutan yang dipergunakan</td>
                <td className="border border-black p-2">{data.transportationMeans}</td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">6</td>
                <td className="border border-black p-2">
                  a. Tempat berangkat<br/>
                  b. Tempat tujuan
                </td>
                <td className="border border-black p-2">
                  a. {data.departurePlace}<br/>
                  b. {data.destination}
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">7</td>
                <td className="border border-black p-2">
                  a. Lamanya Perjalanan Dinas<br/>
                  b. Tanggal berangkat<br/>
                  c. Tanggal harus kembali
                </td>
                <td className="border border-black p-2">
                  a. {data.travelDuration}<br/>
                  b. {formatDate(data.departureDate)}<br/>
                  c. {formatDate(data.returnDate)}
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">8.</td>
                <td className="border border-black p-2">Pengikut : Nama</td>
                <td className="border border-black p-2">Keterangan</td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">9.</td>
                <td className="border border-black p-2">
                  Pembebanan Anggaran<br/>
                  a. Instansi<br/>
                  b. Akun
                </td>
                <td className="border border-black p-2">
                  a. {data.budgetSource || "Institut Pemerintahan Dalam Negeri"}<br/>
                  b. {data.budgetDetails}
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">10.</td>
                <td className="border border-black p-2">Keterangan lain</td>
                <td className="border border-black p-2">{data.additionalNotes}</td>
              </tr>
            </tbody>
          </table>

          {/* Signature Section */}
          <div className="mt-8 text-right">
            <div className="mb-2">Dikeluarkan di : {data.issuedPlace}</div>
            <div className="mb-8">Tanggal : {formatDate(data.issuedDate)}</div>
            
            <div className="mb-2">Pejabat Pembuat Komitmen</div>
            <div className="mt-16">
              <div className="font-bold">{data.approverName}</div>
              <div>NIP.{data.approverNip}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Page 2 - Travel Log */}
      <Card className="print:shadow-none print:border-none print:break-before-page">
        <CardContent className="p-8">
          <table className="w-full border-collapse border border-black text-sm">
            <tbody>
              <tr>
                <td className="border border-black p-4 w-8 text-center font-bold">I</td>
                <td className="border border-black p-4 w-1/2">
                  Berangkat dari : {data.departurePlace}<br/>
                  Ke : {data.destination}<br/>
                  Pada Tanggal : {formatDate(data.departureDate)}<br/>
                  Pejabat Pembuat Komitmen :
                </td>
                <td className="border border-black p-4">
                  <div className="mb-8">{data.approverName}</div>
                  <div>NIP.{data.approverNip}</div>
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-4 text-center font-bold">II</td>
                <td className="border border-black p-4">
                  Tiba di : {data.destination}<br/>
                  Pada tanggal :<br/>
                  Kepala :
                </td>
                <td className="border border-black p-4">
                  Berangkat dari : {data.destination}<br/>
                  Ke : {data.departurePlace}<br/>
                  Pada Tanggal :<br/>
                  Kepala :
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-4 text-center font-bold">III.</td>
                <td className="border border-black p-4">
                  Tiba di :<br/>
                  Pada tanggal :<br/>
                  Kepala :
                </td>
                <td className="border border-black p-4">
                  Berangkat dari :<br/>
                  Ke :<br/>
                  Pada Tanggal :<br/>
                  Kepala :
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-4 text-center font-bold">IV.</td>
                <td className="border border-black p-4">
                  Tiba di :<br/>
                  Pada tanggal :<br/>
                  Kepala :
                </td>
                <td className="border border-black p-4">
                  Berangkat dari :<br/>
                  Ke :<br/>
                  Pada Tanggal :<br/>
                  Kepala :
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-4 text-center font-bold">V.</td>
                <td className="border border-black p-4">
                  Tiba di : {data.departurePlace}-Smd<br/>
                  Pada Tanggal :
                </td>
                <td className="border border-black p-4">
                  Telah diperiksa dengan keterangan bahwa perjalanan tersebut atas perintahnya dan semata-mata untuk kepentingan jabatan dalam waktu yang sesingkat-singkatnya.
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-4 text-center font-bold"></td>
                <td className="border border-black p-4">
                  Pejabat Pembuat Komitmen<br/><br/>
                  <div className="mt-8">
                    <div className="font-bold">{data.approverName}</div>
                    <div>NIP. {data.approverNip}</div>
                  </div>
                </td>
                <td className="border border-black p-4">
                  Pejabat Pembuat Komitmen<br/><br/>
                  <div className="mt-8">
                    <div className="font-bold">{data.approverName}</div>
                    <div>NIP. {data.approverNip}</div>
                  </div>
                </td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">VI</td>
                <td className="border border-black p-2" colSpan={2}>Catatan Lain-Lain</td>
              </tr>
              
              <tr>
                <td className="border border-black p-2 text-center font-bold">VII.</td>
                <td className="border border-black p-2" colSpan={2}>
                  <div className="font-bold">PERHATIAN :</div>
                  <div className="text-xs mt-2">
                    PPK yang menerbitkan SPPD, Pegawai yang melakukan perjalanan dinas, para pejabat yang mengesahkan tanggal berangkat/tiba serta bendaharawan bertanggung jawab berdasarkan peraturan-peraturan Keuangan Negara apabila mendapat rugi akibat kesalahan, kelalaian dan kealfaannya
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
