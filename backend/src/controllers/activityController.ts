import { Request, Response } from 'express';
import Activity from '../models/Activity'; 


// Create a new activity
export const createActivity = async (req: Request, res: Response) => {
    try {
        // TODO: figure out how we're storing images
        const { title, description, mediaLink, category } = req.body;
        const newActivity = new Activity({ title, description, mediaLink, category });
        await newActivity.save();
        res.status(201).json({ message: 'Activity created successfully', activity: newActivity });
    } catch (error) {
        res.status(500).json({ message: 'Error creating activity', error });
    }
};
// Get all Activities
export const getAllActivities = async (req: Request, res: Response) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activities', error });
    }
};

// Get a single activity by ID
export const getActivityById = async (req: Request, res: Response) => {
    try {
        const activity = await Activity.findById(req.params.activityId);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity', error });
    }
};

// Update an activity
export const updateActivity = async (req: Request, res: Response) => {
    try {
        const updatedActivity = await Activity.findByIdAndUpdate(req.params.ActivityId, req.body, { new: true });
        if (!updatedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity updated successfully', activity: updatedActivity });
    } catch (error) {
        res.status(500).json({ message: 'Error updating activity', error });
    }
};

// Delete a activity
export const deleteActivity = async (req: Request, res: Response) => {
    try {
        const result = await Activity.findByIdAndDelete(req.params.activityId);
        if (!result) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting activity', error });
    }
};
