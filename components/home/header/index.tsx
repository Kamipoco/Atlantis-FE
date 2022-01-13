import Link from "next/link";
import { socialLinks } from "./data";

export function Header() {
  function scrollToVideo() {
    document.getElementsByClassName("main-video")[0].scrollIntoView();
  }

  function scrollToCharacters() {
    document.getElementsByClassName("characters-section")[0].scrollIntoView();
  }

  function scrollToRoadMap() {
    document.getElementsByClassName("roadmap-section")[0].scrollIntoView();
  }

  function scrollToTeam() {
    document.getElementsByClassName("atlintis-team")[0].scrollIntoView();
  }
  function scrollToPartners() {
    document
      .getElementsByClassName("partner-section-footer")[0]
      .scrollIntoView();
  }

  function scrollToDocument() {
    document.getElementsByClassName("download")[0].scrollIntoView();
  }
  return (
    <header className="home-header relative flex">
      <Link href={"/"}>
        <img
          src="/assets/images/home/header-logo.png"
          alt="logo"
          className="header-logo cursor-pointer"
        />
      </Link>
      <div className="header-navigation flex">
        <div
          onClick={() => {
            scrollToVideo();
          }}
          className="nav-item cursor-pointer"
        >
          TRAILER
        </div>
        <div
          onClick={() => {
            scrollToCharacters();
          }}
          className="nav-item cursor-pointer"
        >
          CHARACTERS
        </div>
        <div
          onClick={() => {
            scrollToRoadMap();
          }}
          className="nav-item cursor-pointer"
        >
          ROADMAP
        </div>
        <div
          onClick={() => {
            scrollToTeam();
          }}
          className="nav-item cursor-pointer"
        >
          TEAM
        </div>
        <div
          onClick={() => {
            scrollToPartners();
          }}
          className="nav-item cursor-pointer"
        >
          PARTNERS
        </div>
        <div
          onClick={() => {
            scrollToDocument();
          }}
          className="nav-item cursor-pointer"
        >
          DOCUMENTS
        </div>
      </div>
      <Link href={"/market-place"}>
        <img
          src="/assets/images/home/mkp-btn.png"
          alt="mkp btn"
          className="mkp-btn cursor-pointer"
        />
      </Link>
    </header>
  );
}
