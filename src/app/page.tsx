"use client";

import { useState } from "react";
import { TravelOrderForm } from "@/components/travel-order-form";
import { TravelOrderPreview } from "@/components/travel-order-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TravelOrderData {
  // Header Information
  letterNumber: string;
  
  // Main Form Data
  commitmentOfficer: string;
  employeeName: string;
  employeeNip: string;
  rank: string;
  position: string;
  functionalPosition: string;
  workUnit: string;
  
  // Travel Details
  travelPurpose: string;
  transportationMeans: string;
  departurePlace: string;
  destination: string;
  travelDuration: string;
  departureDate: string;
  returnDate: string;
  
  // Budget Information
  budgetSource: string;
  budgetDetails: string;
  
  // Additional Information
  additionalNotes: string;
  
  // Approval Information
  issuedPlace: string;
  issuedDate: string;
  approverName: string;
  approverNip: string;
  approverPosition: string;
}

export default function Home() {
  const [formData, setFormData] = useState<TravelOrderData>({
    letterNumber: "000.2.2.4/142/IPDN.8",
    commitmentOfficer: "Amrin, S.STP, M.Si",
    employeeName: "",
    employeeNip: "",
    rank: "",
    position: "",
    functionalPosition: "",
    workUnit: "",
    travelPurpose: "",
    transportationMeans: "",
    departurePlace: "",
    destination: "",
    travelDuration: "",
    departureDate: "",
    returnDate: "",
    budgetSource: "",
    budgetDetails: "",
    additionalNotes: "",
    issuedPlace: "Jatinangor",
    issuedDate: "",
    approverName: "Amrin, S.STP, M.Si",
    approverNip: "197803241996121001",
    approverPosition: "Pejabat Pembuat Komitmen"
  });

  const [activeTab, setActiveTab] = useState("form");

  const handleFormSubmit = (data: TravelOrderData) => {
    setFormData(data);
    setActiveTab("preview");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-6xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Aplikasi Surat Perjalanan Dinas
            </CardTitle>
            <p className="text-gray-600">
              Institut Pemerintahan Dalam Negeri - Kementerian Dalam Negeri
            </p>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="form">Form Input</TabsTrigger>
                <TabsTrigger value="preview">Preview & Print</TabsTrigger>
              </TabsList>
              
              <TabsContent value="form" className="mt-6">
                <TravelOrderForm 
                  initialData={formData}
                  onSubmit={handleFormSubmit}
                />
              </TabsContent>
              
              <TabsContent value="preview" className="mt-6">
                <TravelOrderPreview data={formData} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
