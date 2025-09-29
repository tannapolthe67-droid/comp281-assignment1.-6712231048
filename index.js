import { getContext, FPS } from "./utils-module.js";

// กำหนดชื่อเรื่องของเอกสาร HTML
document.title = "A01 - App Graphics 2D";
// กำหนดให้ฟังก์ชัน main ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener("DOMContentLoaded", main);

// ฟังก์ชันหลักที่ใช้ในการเริ่มต้นแอปพลิเคชัน ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
function main(ev) {
	// เข้าถึง context ของ canvas ที่มี id เป็น "myCanvas"
	const ctx = getContext("#myCanvas");

	// กำหนดค่าเริ่มต้นสำหรับแอปพลิเคชันในรูปแบบของอ็อบเจกต์ config
	const config = {
		width : 800,
		height : 600,
		bgColor : "white",
		debug : true,
	};

	// กำหนดขนาดของ canvas ตามค่า config
	ctx.canvas.width = config.width;
	ctx.canvas.height = config.height;

	function draw() {
		// ใช้ FPS สำหรับการวัดอัตราเฟรมต่อวินาที
		FPS.update();

		// กำหนดสีพื้นหลังของ canvas และใช้ fillRect เพื่อเติมสีพื้นหลัง
		ctx.fillStyle = config.bgColor;
		ctx.fillRect(0, 0, config.width, config.height);

		// วาดรูปจากส่วนนี้ไป **แนะนำให้วาดจากรูปที่อยู่ด้านหลังไปด้านหน้าตามลำดับ**
		// ใช้ภาพจาก MP1-app-graphics-2d.jpg เป็นแนวทางในการวาดรูป แต่จะวาดอย่างไรก็ได้ตามต้องการ

		// TODO
	ctx.fillStyle = "rgba(126, 215, 250, 1)";
    ctx.fillRect(0, 0, 800, 250); //พื้นหลังท้องฟ้า

    ctx.fillStyle = "rgba(130, 156, 68, 1)";
    ctx.fillRect(0, 250, 800, 350); //พื้นหลังพื้นดิน

    ctx.beginPath(); // เริ่มวาดภูเขา
    ctx.moveTo(0, 250); // จุดเริ่มต้นวาด
    ctx.quadraticCurveTo(150, -50, 350, 250); // วาดเส้นโค้ดเป็นภูเขา
    ctx.fillStyle = "rgba(47, 146, 38, 1)"; // กำหนดสี
    ctx.fill(); // เติมสี
    ctx.closePath(); // คือทำให้มีการลงเส้นกลับมาที่จุดเริ่มต้นหรือปิดเส้น
    ctx.stroke(); //วาดเส้น

    ctx.beginPath();// เริ่มวาดภูเขา
    ctx.moveTo(350, 250);
    ctx.quadraticCurveTo(550, -200, 800, 250);
    ctx.fillStyle = "rgba(47, 146, 38, 1)"; 
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();// พระอาทิตย์
    ctx.arc(325, 75, 40, 0, Math.PI * 2); // วาดวงกลมด้วยครึ่งวงกลม*2
    ctx.fillStyle = "rgba(255, 89, 23, 1)";// สีสำหรับการเติมสีวงกลม
    ctx.fill(); // เติมสี
    ctx.stroke();

    ctx.beginPath();//เริ่มวาดแม่น้ำ
    ctx.moveTo(350, 250);
    ctx.bezierCurveTo(50, 350, 700, 450, 200, 600); //วาดเส้นโค้งซ้ายลงไป
    ctx.lineTo(450, 600); // เชื่อมไปยังปลายอีกฝั่ง
    ctx.bezierCurveTo(700, 450, 175, 350, 350, 250); //วาดเส้นขวากลับขึ้นมา
    ctx.closePath(); // ปิด path
    ctx.fillStyle = "rgba(85, 141, 204, 1)";
    ctx.fill();
    ctx.stroke();

    ctx.strokeRect(575, 375, 100, 75);//สร้างบ้านใช้สี่เหลี่ยม
    ctx.fillStyle = "rgba(216, 182, 131, 1)";
    ctx.fillRect(575, 375, 100, 75);
    ctx.fillStyle = "rgba(43, 40, 37, 1)";
    ctx.fillRect(590, 420, 20, 30);//สร้างประตู
    ctx.beginPath();//สร้างหลังคาใช้เส้นเชื่อมเป็นสามเหลี่ยม
    ctx.moveTo(550, 375);
    ctx.lineTo(625, 300);
    ctx.lineTo(700, 375);
    ctx.fillStyle = "rgba(172, 66, 40, 1)";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();


    ctx.save(); // บันทึกสถานะปัจจุบันของ context
	ctx.translate(-25, -125); // ย้ายจุดเริ่มต้นของการวาด
	ctx.scale(1.5, 1.5); // ขยายให้ใหญ่ขึ้น 1.5 เท่า
    ctx.fillStyle = "rgba(122, 70, 17, 1)";
    ctx.fillRect(150, 416, 18, 40); //ลำต้นไม้
    ctx.beginPath();
    ctx.moveTo(150, 420); // เริ่มวาดใบไม้
    ctx.quadraticCurveTo(122, 425, 135, 400); // โค้งซ้ายล่าง
    ctx.quadraticCurveTo(125, 382, 150, 380); // โค้งซ้ายบน
    ctx.quadraticCurveTo(160, 362, 175, 382); // โค้งขวาบน
    ctx.quadraticCurveTo(200, 388, 185, 400); // โค้งขวากลาง
    ctx.quadraticCurveTo(210, 410, 175, 420); // โค้งขวาล่าง
    ctx.closePath(); // ปิดเส้นรอบรูป
    ctx.fillStyle = "rgba(37, 139, 17, 1)"; // สีเขียวใบไม้
    ctx.fill();
    ctx.stroke();
	ctx.restore(); // คืนสถานะ context กลับไปยังสถานะที่บันทึกไว้ก่อนหน้านี้

	ctx.save(); // ต้นไม้เดิม
	ctx.translate(-125, -125); //เปลี่ยนที่ตั้ง
	ctx.scale(1.3, 1.3); // เปลี่ยนขนาด
    ctx.fillStyle = "rgba(122, 70, 17, 1)";
    ctx.fillRect(150, 416, 18, 40);
    ctx.beginPath();
    ctx.moveTo(150, 420); // เริ่มวาดใบไม้
    ctx.quadraticCurveTo(122, 425, 135, 400); // โค้งซ้ายล่าง
    ctx.quadraticCurveTo(125, 382, 150, 380); // โค้งซ้ายบน
    ctx.quadraticCurveTo(160, 362, 175, 382); // โค้งขวาบน
    ctx.quadraticCurveTo(200, 388, 185, 400); // โค้งขวากลาง
    ctx.quadraticCurveTo(210, 410, 175, 420); // โค้งขวาล่าง
    ctx.closePath(); // ปิดเส้นรอบรูป
    ctx.fillStyle = "rgba(37, 139, 17, 1)"; // สีเขียวใบไม้
    ctx.fill();
    ctx.stroke();
	ctx.restore(); // คืนสถานะ context กลับไปยังสถานะที่บันทึกไว้ก่อนหน้านี้

	ctx.save(); 
	ctx.translate(50, -80); //เปลี่ยนที่ตั้ง
	ctx.scale(1, 1);// เปลี่ยนขนาด
    ctx.fillStyle = "rgba(122, 70, 17, 1)";
    ctx.fillRect(150, 416, 18, 40);
    ctx.beginPath();
    ctx.moveTo(150, 420); // เริ่มจากบนลำต้น
    ctx.quadraticCurveTo(122, 425, 135, 400); // โค้งซ้ายล่าง
    ctx.quadraticCurveTo(125, 382, 150, 380); // โค้งซ้ายบน
    ctx.quadraticCurveTo(160, 362, 175, 382); // โค้งขวาบน
    ctx.quadraticCurveTo(200, 388, 185, 400); // โค้งขวากลาง
    ctx.quadraticCurveTo(210, 410, 175, 420); // โค้งขวาล่าง
    ctx.closePath(); // ปิดเส้นรอบรูป
    ctx.fillStyle = "rgba(37, 139, 17, 1)"; // สีเขียวใบไม้
    ctx.fill();
    ctx.stroke();
	ctx.restore();

	ctx.save(); // บันทึกสถานะปัจจุบันของ context
	ctx.translate(380, 240); //ทำให้เปลี่ยนต่ำทุ่นนาได้ทั้งหมด
	ctx.scale(0.8, 0.8);
	ctx.beginPath();//เริ่มวาดพื้นนา
    ctx.moveTo(50, 50);//เส้นเชื่อมเส้น
	ctx.lineTo(5, 125);
	ctx.lineTo(200, 125);
	ctx.lineTo(235, 50);
	ctx.closePath(); 
    ctx.fillStyle = "rgba(216, 214, 80, 1)"; // เติมสี
	ctx.fill();

	        ctx.save(); 
	        ctx.translate(0, 0); //ต่ำแหน่งต้นข้าว
	        ctx.beginPath();//เริ่มวาดต้นข้าว
            ctx.moveTo(40, 110); //วาดเส้นตรงกลับไปมาเป็นต้น
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save(); 
	        ctx.translate(50, 0); //เปลี่ยนต่ำแหน่ง
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save();
	        ctx.translate(100, 0);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save();
	        ctx.translate(150, 0); 
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save();
	        ctx.translate(15, -40);
	        ctx.beginPath();
            ctx.moveTo(40, 110)
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save(); 
	        ctx.translate(65, -40);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save(); 
	        ctx.translate(115, -40);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save();
	        ctx.translate(165, -40); 
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();
	ctx.stroke();// วาด
	ctx.restore();

	ctx.save(); // บันทึกสถานะปัจจุบันของ context
	ctx.translate(525, 425); // ย้ายทุ่นนา
	ctx.scale(1.2, 1.2);
	ctx.beginPath();
    ctx.moveTo(50, 50); 
	ctx.lineTo(5, 125);
	ctx.lineTo(200, 125);
	ctx.lineTo(235, 50);
	ctx.closePath(); // ปิดเส้นรอบรูป
    ctx.fillStyle = "rgba(216, 214, 80, 1)";
    ctx.fill();

	        ctx.save(); 
	        ctx.translate(0, 0);
	        ctx.beginPath();
            ctx.moveTo(40, 110); 
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save(); 
	        ctx.translate(50, 0); 
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save();
	        ctx.translate(100, 0);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save(); 
	        ctx.translate(150, 0);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save();
	        ctx.translate(15, -40);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save();
	        ctx.translate(65, -40);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save(); 
	        ctx.translate(115, -40);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();

			ctx.save();
	        ctx.translate(165, -40);
	        ctx.beginPath();
            ctx.moveTo(40, 110);
	        ctx.lineTo(35, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(40, 100);
	        ctx.lineTo(40, 110);
	        ctx.lineTo(45, 100);
	        ctx.restore();
			ctx.stroke();
	ctx.stroke();
	ctx.restore();

		// เขตสิ้นสุดของการวาดรูป


		// แสดงข้อความ FPS บน canvas ถ้า config.debug เป็น true
		if (config.debug) FPS.show(ctx, 10, 28);

		// ใช้ requestAnimationFrame เพื่อเรียกใช้ฟังก์ชัน draw ต่อไป
		requestAnimationFrame(draw);
	}
	// เริ่มต้นการวาดภาพบน canvas
	draw();
}