import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";

const pageContent: Record<string, { title: string; text: string }> = {
  support: {
    title: "Support",
    text: "We provide comprehensive technical support for power transformer design, manufacturing, and maintenance. Our team of experienced engineers is available to assist with troubleshooting, diagnostics, and on-site consultation. Whether you need help with routine maintenance planning, emergency fault analysis, or optimizing transformer performance, we offer tailored solutions to keep your equipment running reliably and efficiently.",
  },
  about: {
    title: "About",
    text: "We are a specialized engineering company focused on power transformer technology. With deep expertise in electromagnetic design, thermal analysis, and insulation systems, we deliver high-quality consulting and engineering services to transformer manufacturers and utilities worldwide. Our mission is to bridge the gap between traditional transformer engineering and modern computational tools, helping our clients innovate while maintaining the highest standards of reliability and safety.",
  },
  careers: {
    title: "Careers",
    text: "At the moment, there are no open positions available.\n\nHowever, we are always interested in connecting with talented and motivated professionals in the field of engineering and power transformer services.\n\nIf you believe your expertise could add value to our company, please feel free to send us your CV and a short introduction. We will keep your details on file and contact you should a suitable opportunity arise.",
  },
  training: {
    title: "Training",
    text: "We offer specialized training programs designed for engineers and technical professionals working with power transformers. Our courses cover a wide range of topics — from fundamental electromagnetic theory to advanced simulation techniques using modern CAD/CAE tools. Training can be delivered on-site, remotely, or as part of a tailored curriculum to meet your organization's specific needs.",
  },
};

const subPageTitles: Record<string, string> = {
  parametrization: "Parametrization of Customer Design Solutions",
  "cad-cae-integration": "Integration of CAD/CAE and Software Tools",
};

const GenericPage: React.FC = () => {
  const { page, subPage } = useParams();
  const navigate = useNavigate();

  const pageKey = page || "";
  const currentPage = pageContent[pageKey];

  const title = subPage
    ? subPageTitles[subPage] || subPage
    : currentPage?.title || page;

  const parentTitle = subPage ? currentPage?.title : undefined;
  const bodyText = currentPage?.text || "";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back
          </button>

          {parentTitle &&
          <p className="text-sm font-mono text-muted-foreground mb-2">{parentTitle}</p>
          }

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            {title}
          </h1>

          <div className="terminal-card p-8 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{bodyText}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>);};

export default GenericPage;