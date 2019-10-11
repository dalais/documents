<?php

namespace App\Http\Controllers\Api;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $docs = Document::all()->load('file');
        return response()->json($docs);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'body.title' => 'required|string',
                'body.description' => 'required|string|min:3|max:1500',
                'body.file.filename' => 'required|string',
                'body.file.size' => 'required|numeric',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 'error',
                    'message' => $validator->errors(),
                ]);
            }
            $document = Document::create($request->json('body'));
            $document->file()->create($request->json('body')['file']);

            return response()->json([
                'status' => 'success',
                'message' => 'Документ добавлен',
                'data' => $document
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $document = Document::with('file')->find($id);
        return response()->json($document);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $document = Document::with('file')->find($id);
            $validator = Validator::make($request->all(), [
                'body.title' => 'sometimes|string',
                'body.description' => 'sometimes|string|min:3|max:1500',
                'body.file.size' => 'sometimes|numeric',
                'body.file.filename' => 'sometimes|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 'error',
                    'message' => $validator->errors(),
                ]);
            }
            $document->update($request->json('body'));
            if ($request->json('body')['file']) {
                $document->file->update($request->json('body')['file']);
            }
            return response()->json([
                'status' => 'success',
                'message' => 'Документ изменен',
                'data' => $document,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $document = Document::find($id);
        $document->file->delete();
        $document->delete();
        return response()->json([
            'Документ №' . $document->id . ' удален'
        ]);
    }
}
