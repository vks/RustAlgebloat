#[feature(globs)];
extern mod algebloat;

use algebloat::*;

fn main()
{
	let mut a = Vector::new([1.0, 2.0, 3.0]);
	(&mut a).set(0, 10.0);
	let b = Vector::new([1.0, 2.0, 3.0]);
	
	let d = to_vec((&a + &b - &b).slice(1, 3).slice(0, 1));
	{
		let mut sa = (&mut a).slice(1, 3);
		sa.set(0, 10.0);
	}
	let sb1 = b.slice(1, 3);
	let sb2 = b.slice(2, 3);
	
	let e = to_vec((&a).slice(1, 3) + (&b).slice(1, 3));
	println!("Vectors");
	println!("{}", a);
	println!("{}", sb1);
	println!("{}", sb2);
	println!("{}", d);
	println!("{}", e);
	
	let m = Matrix::new([&[1.0, 2.0, 3.0],
	                     &[4.0, 5.0, 6.0],
	                     &[7.0, 8.0, 9.0]]);
	let t1 = m.t();
	let t2 = t1.t();
	println!("Matrix");
	println!("{}", m);
	println!("r {}\n", m.row(0));
	println!("{}", t1);
	println!("r {}\n", t1.row(0));
	println!("{}", t2);
	println!("r {}", t2.row(0));
} 
