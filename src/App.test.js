import React from 'react';
import ReactDOM from 'react-dom';
import Star from './components/icons/Star';
import Amenity from './components/icons/Amenity';
import Card from './components/home/Card';
import Filters from './components/home/Filters';

// Requirements for Enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// Requirements for expect
import expect from 'expect'
import enzymify from 'expect-enzyme'
expect.extend(enzymify())

it('Star renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Star />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Amenity renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Amenity imagePath="beach" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Star has the correct class', () => {
    const wrapper = Enzyme.shallow(<Star />);
    expect(wrapper).toHaveClass('icon-star');
});

it('Card has the correct structure', () => {
    // Setting data
    const wrapper = Enzyme.shallow(
        <Card
        hotelId="161914"
        hotelImage="981018_26_b.jpg"
        hotelName="NM Lima Hotel"
        hotelPrice={1445.5}
        hotelStars={4}
        hotelAmenities={[
            "business-center",
            "nightclub",
            "deep-soaking-bathtub",
            "fitness-center",
            "garden"
        ]}/>
    );
    expect(wrapper).toExist()
    expect(wrapper).toBeA('div');
    expect(wrapper).toContain('Amenity');
});

it('Card has the correct props', () => {
    // Setting data
    const wrapper = Enzyme.mount(
        <Card
        hotelId="161914"
        hotelImage="981018_26_b.jpg"
        hotelName="NM Lima Hotel"
        hotelPrice={1445.5}
        hotelStars={4}
        hotelAmenities={[
            "business-center",
            "nightclub",
            "deep-soaking-bathtub",
            "fitness-center",
            "garden"
        ]}/>
    );
    expect(wrapper).toHaveProps({
        hotelId : "161914",
        hotelImage : "981018_26_b.jpg",
        hotelName : "NM Lima Hotel",
        hotelPrice : 1445.5,
        hotelStars : 4,
        hotelAmenities : [
            "business-center",
            "nightclub",
            "deep-soaking-bathtub",
            "fitness-center",
            "garden"
        ],
    });
});

it('Filters renders without crashing', () => {
    // Setting data
    const wrapper = Enzyme.shallow(
        <Filters/>
    );
    expect(wrapper).toExist()
    expect(wrapper).toBeA('div');
    expect(wrapper).toContain('Star');
    expect(wrapper).toHaveClass('filters-box');
});
