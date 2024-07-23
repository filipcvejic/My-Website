import React from "react";
import { Link } from "react-router-dom";

function MailIcon() {
  return (
    <Link
      to="mailto:filipinfo@gmail.com"
      className="group hover:scale-110 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 512 512"
        version="1.1"
        className="default:w-[40px] default:h-[40px] md:h-[55px] md:w-[55px]"
      >
        <path d="" stroke="none" fill="#080404" fillRule="evenodd" />
        <path
          d="M 223.564 1.625 C 177.870 7.477, 131.882 27.149, 95 56.620 C 84.098 65.331, 65.331 84.098, 56.620 95 C 26.699 132.445, 7.290 178.241, 1.536 224.970 C -0.429 240.920, -0.439 269.756, 1.512 286.441 C 6.931 332.767, 26.659 379.505, 56.620 417 C 65.373 427.954, 84.150 446.718, 95 455.353 C 129.016 482.424, 169.445 500.904, 211 508.374 C 241.862 513.922, 280.330 513.172, 310.934 506.426 C 347.913 498.275, 386.648 479.633, 417 455.380 C 427.902 446.669, 446.669 427.902, 455.380 417 C 484.721 380.281, 505.608 331.372, 510.078 288.923 C 510.681 283.191, 511.586 277.719, 512.088 276.764 C 512.589 275.809, 512.964 265.459, 512.921 253.764 C 512.878 242.069, 512.566 233.175, 512.229 234 C 511.891 234.825, 511.041 230.441, 510.338 224.258 C 505.275 179.671, 485.074 132.161, 455.380 95 C 446.669 84.098, 427.902 65.331, 417 56.620 C 379.589 26.727, 333.716 7.284, 287.030 1.536 C 271.561 -0.369, 238.774 -0.323, 223.564 1.625 M 114.500 141.392 C 107.810 143.519, 104.466 145.688, 99.701 150.988 C 91.019 160.644, 91.500 154.490, 91.500 256 C 91.500 340.224, 91.608 345.810, 93.334 350.762 C 95.774 357.760, 103.377 366.021, 110.230 369.118 L 115.500 371.500 256 371.500 L 396.500 371.500 401.770 369.118 C 408.623 366.021, 416.226 357.760, 418.666 350.762 C 420.392 345.810, 420.500 340.224, 420.500 256 C 420.500 171.776, 420.392 166.190, 418.666 161.238 C 416.226 154.240, 408.623 145.979, 401.770 142.882 L 396.500 140.500 257.500 140.310 C 147.350 140.159, 117.670 140.384, 114.500 141.392 M 144.074 167.282 C 144.940 167.952, 170.300 188.075, 200.430 212 C 230.560 235.925, 255.566 255.500, 256 255.500 C 256.434 255.500, 281.440 235.925, 311.570 212 C 341.700 188.075, 367.060 167.952, 367.926 167.282 C 369.166 166.322, 345.415 166.064, 256 166.064 C 166.585 166.064, 142.834 166.322, 144.074 167.282 M 117 260.155 C 117 332.210, 117.179 341.810, 118.557 343.777 L 120.113 346 256.034 346 L 391.954 346 393.483 343.666 C 394.829 341.613, 394.981 331.603, 394.756 260.175 L 394.500 179.016 351.500 213.139 C 250.711 293.121, 261.500 285, 256.030 285 C 251.847 285, 250.445 284.422, 245.840 280.800 C 242.903 278.490, 213.275 255.017, 180 228.639 C 146.725 202.261, 118.938 180.246, 118.250 179.717 C 117.252 178.949, 117 195.189, 117 260.155 M 0.426 255.500 C 0.427 267.600, 0.571 272.413, 0.747 266.195 C 0.923 259.977, 0.922 250.077, 0.746 244.195 C 0.569 238.313, 0.425 243.400, 0.426 255.500"
          stroke="none"
          className="group-hover:fill-greenyelow transition-all duration-300"
          fill="#fff"
          fillRule="evenodd"
        />
      </svg>
    </Link>
  );
}

export default MailIcon;
