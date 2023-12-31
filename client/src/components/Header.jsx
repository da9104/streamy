import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payment from './Payment'

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return null
			case false:
				return <a href="/auth/google" className="cursor-point px-4 py-1 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black text-sm font-medium">Sign in</a>
			default:
				return [
				<li key={0} id="credits" className='text-sm font-medium'> Credits: {`${this.props.auth.credits}`}</li>,
				<li key={1}> <Payment /> </li>,
				<li key={2}> <a href="/api/logout" className="cursor-point px-4 py-1 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in text-sm font-medium">Log out</a> </li>
				]
			}
	}
	render() {
		return (
  <header className="relative bg-white">
  <p className="flex h-10 items-center justify-center bg-indigo-300 shadow-md px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

  <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div className="border-b border-gray-200">
	  <div className="flex h-16 items-center">

		<button type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
		  <span className="absolute -inset-0.5"></span>
		  <span className="sr-only">Open menu</span>
		  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		  </svg>
		</button>

		<div className="ml-4 flex lg:ml-0">
			<Link to={this.props.auth ? '/surveys' : '/'}>
				Streamy
			</Link>
		</div>

		<div className="hidden lg:ml-8 lg:block lg:self-stretch">
		  <div className="flex h-full space-x-8">
			<div className="flex">
			  <div className="relative flex">
				<button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out">Shop</button>
			  </div>

			  <div className="absolute inset-x-0 top-full text-sm text-gray-500">
				<div className="absolute inset-0 top-1/2 bg-white shadow"></div>

				<div className="relative bg-white">
				  <div className="mx-auto max-w-7xl px-8 py-4">
				  {this.props.auth ? <p className='py-5'></p> : <p href="#" className="pt-2 py-2 mb-0 text-center text-sm font-medium text-gray-700 hover:text-gray-800">Make your look awesome, Streamy</p>}
					<div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-8 py-15">
					  <div className="col-start-2 grid grid-cols-2 gap-x-8">
						<div className="group relative text-base sm:text-sm">
						  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
							<img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="object-cover object-center" />
						  </div>
						  <a href="#" className="mt-6 block font-medium text-gray-900">
							<span className="absolute inset-0 z-10"></span>
							New Arrivals
						  </a>
						  <p ariaHidden="true" className="mt-1">Shop now</p>
						</div>
						<div className="group relative text-base sm:text-sm">
						  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
							<img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="object-cover object-center" />
						  </div>
						  <a href="#" className="mt-6 block font-medium text-gray-900">
							<span className="absolute inset-0 z-10"></span>
							Artwork Tees
						  </a>
						  <p className="mt-1">Shop now</p>
						</div>
						
					  </div>
					  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
						<div>
						  <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
						  <ul role="list" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Tops</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Pants</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Sweaters</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">T-Shirts</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Jackets</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Activewear</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Browse All</a>
							</li>
						  </ul>
						</div>
						<div>
						  <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
						  <ul role="list"  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Watches</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Wallets</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Bags</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Sunglasses</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Hats</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Belts</a>
							</li>
						  </ul>
						</div>
						<div>
						  <p id="Brands-heading" className="font-medium text-gray-900">Brands</p>
						  <ul role="list"  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Re-Arranged</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Counterfeit</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">Full Nelson</a>
							</li>
							<li className="flex">
							  <a href="#" className="hover:text-gray-800">My Way</a>
							</li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>

			<a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
			<a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
			<a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Contact us</a>
		  </div>
		</div>

		<div className="ml-auto flex items-center">
		 
		  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 list-none">
		  {this.props.auth ? '' : <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>}
		  {/* <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span> */}
		  { this.renderContent() }
		  </div>

		  <div className="hidden lg:ml-8 lg:flex">
			<a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
			  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
			  <span className="ml-3 block text-sm font-medium">CAD</span>
			  <span className="sr-only">, change currency</span>
			</a>
		  </div>

		  <div className="flex lg:ml-6">
			<a href="#" className="p-2 text-gray-400 hover:text-gray-500">
			  <span className="sr-only">Search</span>
			  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
			  </svg>
			</a>
		  </div>


		  <div className="ml-4 flow-root lg:ml-6">
			<a href="#" className="group -m-2 flex items-center p-2">
			  <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
			  </svg>
			  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
			  <span className="sr-only">items in cart, view bag</span>
			</a>
		  </div>
		</div>
	  </div>
	</div>
  </nav>
</header>
		)
	}
}

function mapStateToProps(state) {
	return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)