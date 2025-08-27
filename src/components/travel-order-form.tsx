"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { TravelOrderData } from "@/app/page";

interface TravelOrderFormProps {
  initialData: TravelOrderData;
  onSubmit: (data: TravelOrderData) => void;
}

export function TravelOrderForm({ initialData, onSubmit }: TravelOrderFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<TravelOrderData>({
    defaultValues: initialData
  });

  const onFormSubmit = (data: TravelOrderData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      {/* Header Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Informasi Surat</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="letterNumber">Nomor Surat</Label>
              <Input
                id="letterNumber"
                {...register("letterNumber", { required: "Nomor surat wajib diisi" })}
                placeholder="000.2.2.4/142/IPDN.8"
              />
              {errors.letterNumber && (
                <p className="text-sm text-red-600 mt-1">{errors.letterNumber.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="commitmentOfficer">Pejabat Pembuat Komitmen</Label>
              <Input
                id="commitmentOfficer"
                {...register("commitmentOfficer", { required: "Pejabat pembuat komitmen wajib diisi" })}
                placeholder="Amrin, S.STP, M.Si"
              />
              {errors.commitmentOfficer && (
                <p className="text-sm text-red-600 mt-1">{errors.commitmentOfficer.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Employee Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Data Pegawai</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="employeeName">Nama Pegawai</Label>
              <Input
                id="employeeName"
                {...register("employeeName", { required: "Nama pegawai wajib diisi" })}
                placeholder="Rozali Ilham, S.Kom, M.Kom"
              />
              {errors.employeeName && (
                <p className="text-sm text-red-600 mt-1">{errors.employeeName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="employeeNip">NIP</Label>
              <Input
                id="employeeNip"
                {...register("employeeNip", { required: "NIP wajib diisi" })}
                placeholder="199306142022031004"
              />
              {errors.employeeNip && (
                <p className="text-sm text-red-600 mt-1">{errors.employeeNip.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="rank">Pangkat dan Golongan</Label>
              <Input
                id="rank"
                {...register("rank", { required: "Pangkat wajib diisi" })}
                placeholder="Penata Muda Tk.I (III/b)"
              />
              {errors.rank && (
                <p className="text-sm text-red-600 mt-1">{errors.rank.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="position">Jabatan/Instansi</Label>
              <Input
                id="position"
                {...register("position", { required: "Jabatan wajib diisi" })}
                placeholder="Fungsional Dosen pada FMP"
              />
              {errors.position && (
                <p className="text-sm text-red-600 mt-1">{errors.position.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="workUnit">Tingkat Biaya Perjalanan Dinas</Label>
            <Input
              id="workUnit"
              {...register("workUnit")}
              placeholder="C.I.C"
            />
          </div>
        </CardContent>
      </Card>

      {/* Travel Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Detail Perjalanan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="travelPurpose">Maksud Perjalanan Dinas</Label>
            <Textarea
              id="travelPurpose"
              {...register("travelPurpose", { required: "Maksud perjalanan wajib diisi" })}
              placeholder="Melaksanakan tugas dalam rangka Kegiatan Pengabdian Kepada Masyarakat Dosen Berbasis Prodi pada Fakultas Manajemen Pemerintahan, di Kota Padang Prov. Sumatera Barat"
              rows={3}
            />
            {errors.travelPurpose && (
              <p className="text-sm text-red-600 mt-1">{errors.travelPurpose.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="transportationMeans">Alat Angkutan</Label>
              <Input
                id="transportationMeans"
                {...register("transportationMeans", { required: "Alat angkutan wajib diisi" })}
                placeholder="Transportasi Darat"
              />
              {errors.transportationMeans && (
                <p className="text-sm text-red-600 mt-1">{errors.transportationMeans.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="departurePlace">Tempat Berangkat</Label>
              <Input
                id="departurePlace"
                {...register("departurePlace", { required: "Tempat berangkat wajib diisi" })}
                placeholder="Bukittinggi"
              />
              {errors.departurePlace && (
                <p className="text-sm text-red-600 mt-1">{errors.departurePlace.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="destination">Tempat Tujuan</Label>
              <Input
                id="destination"
                {...register("destination", { required: "Tempat tujuan wajib diisi" })}
                placeholder="Kota Padang"
              />
              {errors.destination && (
                <p className="text-sm text-red-600 mt-1">{errors.destination.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="travelDuration">Lamanya Perjalanan Dinas</Label>
              <Input
                id="travelDuration"
                {...register("travelDuration", { required: "Lama perjalanan wajib diisi" })}
                placeholder="3 (tiga) hari"
              />
              {errors.travelDuration && (
                <p className="text-sm text-red-600 mt-1">{errors.travelDuration.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="departureDate">Tanggal Berangkat</Label>
              <Input
                id="departureDate"
                type="date"
                {...register("departureDate", { required: "Tanggal berangkat wajib diisi" })}
              />
              {errors.departureDate && (
                <p className="text-sm text-red-600 mt-1">{errors.departureDate.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="returnDate">Tanggal Harus Kembali</Label>
              <Input
                id="returnDate"
                type="date"
                {...register("returnDate", { required: "Tanggal kembali wajib diisi" })}
              />
              {errors.returnDate && (
                <p className="text-sm text-red-600 mt-1">{errors.returnDate.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Informasi Anggaran</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="budgetSource">Pembebanan Anggaran</Label>
            <Input
              id="budgetSource"
              {...register("budgetSource")}
              placeholder="Institut Pemerintahan Dalam Negeri - Kementerian Dalam Negeri"
            />
          </div>
          <div>
            <Label htmlFor="budgetDetails">Keterangan Lain</Label>
            <Textarea
              id="budgetDetails"
              {...register("budgetDetails")}
              placeholder="Keterangan tambahan mengenai anggaran"
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Approval Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Informasi Persetujuan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="issuedPlace">Dikeluarkan di</Label>
              <Input
                id="issuedPlace"
                {...register("issuedPlace", { required: "Tempat penerbitan wajib diisi" })}
                placeholder="Jatinangor"
              />
              {errors.issuedPlace && (
                <p className="text-sm text-red-600 mt-1">{errors.issuedPlace.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="issuedDate">Tanggal</Label>
              <Input
                id="issuedDate"
                type="date"
                {...register("issuedDate", { required: "Tanggal penerbitan wajib diisi" })}
              />
              {errors.issuedDate && (
                <p className="text-sm text-red-600 mt-1">{errors.issuedDate.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="approverName">Nama Pejabat Penandatangan</Label>
              <Input
                id="approverName"
                {...register("approverName", { required: "Nama pejabat wajib diisi" })}
                placeholder="Amrin, S.STP, M.Si"
              />
              {errors.approverName && (
                <p className="text-sm text-red-600 mt-1">{errors.approverName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="approverNip">NIP Pejabat</Label>
              <Input
                id="approverNip"
                {...register("approverNip", { required: "NIP pejabat wajib diisi" })}
                placeholder="197803241996121001"
              />
              {errors.approverNip && (
                <p className="text-sm text-red-600 mt-1">{errors.approverNip.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
          Buat Preview Surat
        </Button>
      </div>
    </form>
  );
}
